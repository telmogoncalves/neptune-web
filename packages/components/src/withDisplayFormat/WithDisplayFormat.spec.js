import React from 'react';
import { mount } from 'enzyme/build';
import WithDisplayFormat from './index';
import { fakeKeyDownEventForKey } from '../common/fakeEvents';
import { HistoryNavigator } from '../common';

jest.useFakeTimers();

const REDO_EVENT = { ctrlKey: true, charCode: 'z', shiftKey: true, which: 90 };
const UNDO_EVENT = { ctrlKey: true, charCode: 'z', which: 90 };

const triggerEvent = fakeKeyDownEventForKey();

const TESTS = [
  { value: '123', expectedValue: '12-3', displayPattern: '**-**-**' },
  { value: '1234', expectedValue: '12-34', displayPattern: '**-**-**' },
  { value: '1234', expectedValue: '+(12) 34', displayPattern: '+(**) *' },
];

describe('InputWithTextFormat', () => {
  let component;
  const props = {
    placeholder: 'a placeholder',
    displayPattern: '**-**',
    className: 'form-control',
    onChange: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  };

  beforeEach(() => {
    component = mount(
      <WithDisplayFormat {...props} render={(renderProps) => <input {...renderProps} />} />,
    );
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  TESTS.forEach((test) => {
    const { value, expectedValue, displayPattern } = test;
    it(`returns ${expectedValue} for ${value} if displayPattern is ${displayPattern} `, () => {
      component.setProps({ displayPattern });
      component.setState({ triggerEvent });

      componentInput().simulate('change', { target: { value } });
      expect(componentInput().props().value).toEqual(expectedValue);
      expect(props.onChange).toHaveBeenCalledWith(value);

      componentInput().simulate('focus', { target: { value } });
      expect(componentInput().props().value).toEqual(expectedValue);
      expect(props.onFocus).toHaveBeenCalledWith(value);

      componentInput().simulate('blur', { target: { value } });
      expect(componentInput().props().value).toEqual(expectedValue);
      expect(props.onBlur).toHaveBeenCalledWith(value);
    });
  });

  describe('when Undo/Redo is preformed', () => {
    it(`it goes back/forward in input value's history`, () => {
      component.setProps({ displayPattern: '***' });
      component.setState({
        historyNavigator: new HistoryNavigator(['@', '@@', '@@@']),
      });

      componentInput().simulate('keyDown', UNDO_EVENT);
      expect(componentInput().props().value).toBe('@@');
      componentInput().simulate('keyDown', UNDO_EVENT);
      expect(componentInput().props().value).toBe('@');
      componentInput().simulate('keyDown', UNDO_EVENT);
      expect(componentInput().props().value).toBe('@');

      componentInput().simulate('keyDown', REDO_EVENT);
      expect(componentInput().props().value).toBe('@@');
      componentInput().simulate('keyDown', REDO_EVENT);
      expect(componentInput().props().value).toBe('@@@');
      componentInput().simulate('keyDown', REDO_EVENT);
      expect(componentInput().props().value).toBe('@@@');
    });
  });

  describe('on "autofill"', () => {
    beforeEach(() => {
      component = mount(
        <WithDisplayFormat {...props} render={(renderProps) => <input {...renderProps} />} />,
      );
    });

    it('tests case with 5 random digits', () => {
      componentInput().simulate('change', { target: { value: '12345' } });

      jest.runAllTimers();

      expect(componentInput().props().value).toBe('12-345');
    });
  });

  describe('when backspace is pressed', () => {
    beforeEach(() => {
      component = mount(
        <WithDisplayFormat {...props} render={(renderProps) => <input {...renderProps} />} />,
      );
      component.setState({
        triggerEvent: { ...triggerEvent, key: 'Backspace' },
      });
    });

    it(`it has default behaviour if deleted char is not a symbol`, () => {
      component.setState({ selectionStart: 2, selectionEnd: 2 });

      componentInput().simulate('change', { target: { value: '12-3' } });
      expect(componentInput().props().value).toBe('12-3');
    });

    it(`it has default behaviour for multiple deletion`, () => {
      component.setState({ selectionStart: 3, selectionEnd: 1 });

      componentInput().simulate('change', { target: { value: '12-3' } });
      expect(componentInput().props().value).toBe('12-3');
    });

    it(`performs an extra delete if next char is a separator`, () => {
      component.setState({ selectionStart: 3, selectionEnd: 3 });

      componentInput().simulate('change', { target: { value: '123' } });
      expect(componentInput().props().value).toBe('13');
    });
  });

  describe('set cursor position', () => {
    const triggerEventA = { ...triggerEvent, target: { setSelectionRange: () => {} } };
    beforeEach(() => {
      component.setState({
        triggerEvent: triggerEventA,
      });
    });

    it(`when entered a char`, () => {
      component.setState({ selectionStart: 4, selectionEnd: 4 });
      componentInput().simulate('change', { target: { value: '13-4@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(5);
    });

    it(`when entered a char before a symbol`, () => {
      component.setState({ selectionStart: 2, selectionEnd: 2 });
      componentInput().simulate('change', { target: { value: '13-@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(4);
    });
    //
    it(`when deleted a char before the symbol`, () => {
      component.setState({
        triggerEvent: { ...triggerEventA, key: 'Backspace' },
      });
      component.setState({ selectionStart: 3, selectionEnd: 3 });
      componentInput().simulate('change', { target: { value: '13-45-6' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(1);
    });

    it(`when delete a symbol`, () => {
      component.setState({
        triggerEvent: { ...triggerEventA, ctrlKey: true, which: 68 },
      });

      component.setState({ selectionStart: 2, selectionEnd: 2 });
      componentInput().simulate('change', { target: { value: '14' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(2);
    });

    it(`when pasted selection is entered after a symbol`, () => {
      component.setState({
        triggerType: 'Paste',
        pastedLength: 2,
      });

      component.setState({ selectionStart: 2, selectionEnd: 2 });
      componentInput().simulate('change', { target: { value: '13-@@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(5);
    });

    it(`when pasted selection is entered before a symbol`, () => {
      component.setState({
        triggerType: 'Paste',
        pastedLength: 2,
      });
      component.setState({ selectionStart: 1, selectionEnd: 1 });
      componentInput().simulate('change', { target: { value: '1@-@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(4);
    });

    it(`when cut selection before a symbol `, () => {
      component.setState({
        triggerType: 'Cut',
      });
      component.setState({ selectionStart: 0, selectionEnd: 2 });
      componentInput().simulate('change', { target: { value: '34' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(0);
    });

    it(`when cut selection before a symbol `, () => {
      component.setState({
        triggerType: 'Cut',
      });
      component.setState({ selectionStart: 1, selectionEnd: 4 });
      componentInput().simulate('change', { target: { value: '14' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(1);
    });
  });

  const componentInput = () => component.find('input');
});
