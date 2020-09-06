import React from 'react';

// multi import
import {Cards, Chart, CountryPicker} from './components/index';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }


    // use 'async' if your function async
    async componentDidMount() {
        // use 'await' for async functions
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);

        //set the state
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;