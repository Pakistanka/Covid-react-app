import React from 'react';

// multi import
import {Cards, Chart, CountryPicker} from './components/index';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {

    // use 'async' if your function async
    async componentDidMount() {
        // use 'await' for async functions
        const data = await fetchData();

        console.log(data);
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;