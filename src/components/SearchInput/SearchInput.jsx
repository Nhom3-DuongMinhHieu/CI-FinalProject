import React, { useState } from 'react';
import { Select, DatePicker, Space, Button, Tooltip } from 'antd';
import GuestsCountModal from '../GuestsCountModal/GuestsCountModal';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.scss';
import moment from 'moment';
const { Option } = Select;
const { RangePicker } = DatePicker;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const SearchInput = () => {
  const [amount, setAmount] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  return (
    <div className='header__search'>
      <Select
        allowClear={true}
        size='large'
        bordered={false}
        showSearch
        placeholder='Lựa chọn hạng phòng'
        optionFilterProp='children'
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        dropdownStyle={{
          maxHeight: '280px',
          overflow: 'auto',
          borderRadius: '4px',
          width: '100%',
        }}
      >
        <Option className='header__search-option' value='jack'>
          Một giường đôi
        </Option>
        <Option className='header__search-option' value='lucy'>
          Một giường đơn
        </Option>
        <Option className='header__search-option' value='tom'>
          Hai giường đôi
        </Option>
        <Option className='header__search-option' value='tom'>
          Hai giường đơn
        </Option>
      </Select>

      <div className='vertical-line'></div>

      <div className='header__search-date-picker'>
        <Space direction='vertical' size={12}>
          <RangePicker
            size='large'
            bordered={false}
            allowClear={true}
            placeholder={['Nhận phòng', 'Trả phòng']}
            format={'DD/MM/YYYY'}
            disabledDate={disabledDate}
          />
        </Space>
      </div>
      <div className='vertical-line'></div>
      <div className='header__search-person-count'>
        <div
          className='person-count__title'
          onClick={() => setModalVisible(true)}
        >
          <p>{amount.adult} người lớn</p>
          <p>|</p>
          <p>{amount.children} trẻ em</p>
          <p>|</p>
          <p>{amount.room} phòng</p>
        </div>
        {modalVisible ? (
          <GuestsCountModal
            onOk={() => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
            setModalVisible={setModalVisible}
            amount={amount}
            setAmount={setAmount}
          />
        ) : (
          ''
        )}
      </div>

      <Tooltip title='search'>
        <Button
          type='primary'
          shape='circle'
          icon={<SearchOutlined />}
          size='large'
        />
      </Tooltip>
    </div>
  );
};

export default SearchInput;
