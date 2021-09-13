
function SwitchButton({value=false, onChange=null}) {
  return (
    <label className="switch-box-cotianer">
      <input type="checkbox" value={value} onChange={onChange} hidden className="switch-box-input" />
      <div className="switch-box-container">
        <div className="switch-body">
        </div>
      </div>
    </label>
  );
}

export default SwitchButton;
