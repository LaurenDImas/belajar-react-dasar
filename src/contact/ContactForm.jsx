import {useState} from "react";

const initialData ={
    name: '',
    message: '',
}

export default function ContactForm() {
    const [contact, setContact] = useState(initialData);
    const [contacts, setContacts] = useState([])
    // const [contact, setContact] = useImmer(initialData);

    function handleChange(e){
        const  { name, value } = e.target;
        setContact(prev => ({
            ...prev,
            [name] : value,
        }));
    }

    function handleNameChange(event) {
        setContact(draft => {
            draft.name = event.target.value;
        })
    }

    function handleMessageChange(event) {
        setContact(draft => {
            draft.message = event.target.value;
        })
    }

    function handleClick(event) {
        event.preventDefault();

        setContacts(prev => ([
            ...prev,
            contact
        ]))

        setContact({
            name: "",
            message: "",
        });

    }
    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" name="name" placeholder="name" onChange={handleChange} value={contact.name} />
                <br />
                <input type="text" name="message" placeholder="message" onChange={handleChange} value={contact.message} />
                <button onClick={handleClick}>Submit</button>
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>

            <h1>List Contact</h1>
            {contacts.map((val, key) => {
                return (
                    <ul>
                        <li key={key}>Name: {val.name}</li>
                        <li>Message: {val.message}</li>
                    </ul>
                )
            })}
        </div>
    );
}