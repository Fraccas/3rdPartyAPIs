import * as React from 'react';
import { string } from 'prop-types';

class Email extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    onSubmit = async(e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await fetch('/api/mailgun', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify(this.state)
            });
            this.setState({ email: '', subject: '', message: ''})
        } catch (e) {
            throw e;
        }
    }

    render() {
        return (
            <main className="container">
                <form className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-primary text-light"
                    onSubmit={this.onSubmit}
                >
                    <label>Email</label>
                    <input type="text" value={this.state.email} className="input-group my-1 p-1" 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                    />

                    <label>Subject</label>
                    <input type="text" value={this.state.subject} className="input-group my-1 p-1" 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })}
                    />

                    <label>Message</label>
                    <input type="text" value={this.state.message} className="input-group my-1 p-1" 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ message: e.target.value })}
                    />

                    <button className="btn btn-secondary mt-2 shadow">Send Email</button>
                </form>
            </main>
        );
    }
}

interface IFormProps { }

interface IFormState {
    email: string,
    subject: string, 
    message: string
 }

export default Email