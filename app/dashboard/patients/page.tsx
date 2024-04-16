import { fetchPatients } from 'app/lib/data';

export default async function Page() {
  const patients = await fetchPatients();
  
  return <div>Patients
    <ul>
      {patients.map(patient => (
        <li key={patient.id} className='mb-2'><span className="font-bold">{patient.name}</span><br />species:{patient.species}<br />age: {patient.age}<br />ownerId: {patient.ownerid}</li>
      ))}
    </ul>
  </div>;
  }
  