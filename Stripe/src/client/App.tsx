import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form';

class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <>
            <StripeProvider apiKey="pk_test_sCUedu8cZGsq3Qfcc8HtJQ13007Jpqsuew">
                <Elements>
                    <Form />
                </Elements>
            </StripeProvider>
            </>
        )
    }
}

export interface IAppProps { }

export interface IAppState { }

export default App;