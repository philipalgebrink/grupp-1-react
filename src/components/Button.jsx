import '../pages/App.css';

function Button({ title, className, onClick }) {
  return (
    <div className={`btn ${className}`} onClick={onClick}>
      {title}
    </div >
  );
}

export default Button;