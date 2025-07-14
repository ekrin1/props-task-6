import './App.css';

import { UserProfile } from './types';

import UserDescription from './components/UserDescription';
import ContactCard from './components/ContactCard';
import LocationCard from './components/LocationCard';
import InterestsCard from './components/InterestsCard';

function App() {
    const userProfile: UserProfile = {
      userName: 'Кот',
      protoUrl: null,
      userDescription: 'Любитель покушать и поспать',
      openForWork: false,
      contactInfo: {
        email: 'meowmeow@cat.com',
        phone: '+1234567890',
      },
      location: {
        city: 'Москва',
        country: 'Россия',
        address: 'Лежанка',
      },
      interests: ['покушать', 'поспать'],
    };
  
    return (
      <>
        <UserDescription
          name={userProfile.userName}
          description={userProfile.userDescription}
          protoUrl={userProfile.protoUrl}
          openForWork={userProfile.openForWork}
        />
        <div className="main">
          <ContactCard contactInfo={userProfile.contactInfo} />
          {userProfile.location && <LocationCard location={userProfile.location} />}
          <InterestsCard interests={userProfile.interests} />
        </div>
      </>
    );
  }
  
  export default App;
