import { Fragment } from 'react';
import Heighlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const Main = (props) => {

    return (
        <Fragment>
            <main>
                <Heighlights />
                <Testimonials />
                {/* <About /> */}
            </main>
        </Fragment>
    )
};

export default Main;

