
import "./Style.css"
function Button({ title, onClick, disabled, id }) {
  return (
    <button className="page_button" id={id} data-testid="button-component"  disabled={disabled} onClick={onClick}  >
      {title}
    </button>
  );
}

export default Button;