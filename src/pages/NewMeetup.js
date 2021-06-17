import NewMeetupFrom from "../components/layout/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'

function NewMeetupPage() {
  const history =  useHistory()
  function addMeetupHandler(meetupData) {
     fetch('https://react-getting-started-b33a1-default-rtdb.firebaseio.com/meetups.json', {
       method: 'POST',
       body: JSON.stringify(meetupData),
       headers: {
         'Content-Type': 'application/json'
       }
     }).then(() =>{
       history.replace('/')
     })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
