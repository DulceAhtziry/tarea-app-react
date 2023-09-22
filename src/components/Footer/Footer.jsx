export const Footer = ({porcentaje}) => {
  const porcentajeValido = !isNaN(porcentaje) ? porcentaje * 100 : 0;
  return (
    <>
      <div className="progress fixed-bottom">
        <div
          className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${porcentajeValido}%` }}
          aria-valuenow={porcentajeValido}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {Math.floor(porcentajeValido)}%
        </div>
      </div>
    </>
  );
};

