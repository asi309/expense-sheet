import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, filtersWithValues } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setSortByAmount = jest.fn();
    setSortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setSortByAmount={setSortByAmount}
            setSortByDate={setSortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with values correctly', () => {
    wrapper.setProps({filters: filtersWithValues});
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    wrapper.setProps({filters: filtersWithValues});
    wrapper.find('input').simulate('change', {
        target: {
            value: filtersWithValues.text
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(filtersWithValues.text);
});

test('Should sort by date', () => {
    wrapper.setProps({filters: filtersWithValues});
    wrapper.find('select').simulate('change', {
        target: {
            value: 'date'
        }
    });
    expect(setSortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: {
            value: 'amount'
        }
    });
    expect(setSortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
    wrapper.find(DateRangePicker).prop('onDatesChange')(
        {
            startDate: filtersWithValues.startDate,
            endDate: filtersWithValues.endDate
        }
    );
    expect(setStartDate).toHaveBeenLastCalledWith(filtersWithValues.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(filtersWithValues.endDate);
});

test('Should handle date focus changes', () => {
    wrapper.find(DateRangePicker).prop('onFocusChange')('startDate');
    expect(wrapper.state('focused')).toBe('startDate');
});