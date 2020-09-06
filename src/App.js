import React from 'react';

// multi import
import {Cards, Chart, CountryPicker} from './components/index';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {

    state = {
        data: {},

    }


    // use 'async' if your function async
    async componentDidMount() {
        // use 'await' for async functions
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;