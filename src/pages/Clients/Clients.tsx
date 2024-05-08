import { Link} from 'react-router-dom';

function Clients() {
    return (
      <div>
        <h1>Clients</h1>
        <Link to="/clients/innotech">InnoTech</Link>
        <Link to="/clients/nextgen">NextGen</Link>
        <Link to="/clients/quantaCore">QuantaCore</Link>
      </div>
    )
  }

export default Clients;