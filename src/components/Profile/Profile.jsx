import './Profile.css';

export default function Profile(props) {
  return (
    <h1 className='profile'>Profile Page of {props.name}</h1>
  );
}