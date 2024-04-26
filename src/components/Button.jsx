import '../pages/App.css';

function Button({ title, className }) {
  return (
    <div className={`btn ${className}`}>
      {title}
    </div>
  );
}

export default Button;