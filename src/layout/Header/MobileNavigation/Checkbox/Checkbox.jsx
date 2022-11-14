const checkboxConfiguration = {
  top: {
    active: 'mobile-icon-top-active',
  },
  middle: {
    active: 'mobile-icon-middle-active',
  },
  bottom: {
    active: 'mobile-icon-bottom-active',
  },
};

const Checkbox = ({ onCheck, isChecked }) => {
  const { top, middle, bottom } = checkboxConfiguration;

  return (
    <>
      <input
        type='checkbox'
        className='hidden'
        id='mobile-nav'
        checked={isChecked}
        onChange={onCheck}
      />
      <label
        htmlFor='mobile-nav'
        className='checkbox-button'
        onChange={onCheck}
      >
        <span className={`mobile-icon-top ${isChecked ? top.active : ''}`}>
          &nbsp;
        </span>
        <span
          className={`mobile-icon-middle ${isChecked ? middle.active : ''}`}
        >
          &nbsp;
        </span>
        <span
          className={`mobile-icon-bottom ${isChecked ? bottom.active : ''}`}
        >
          &nbsp;
        </span>
      </label>
    </>
  );
};

export default Checkbox;
