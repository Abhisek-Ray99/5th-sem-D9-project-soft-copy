import React from "react";
import Cards from '../../Cards/Cards'
import Chart from "../../Chart/Chart";
import CountryPicker from "../../CountryPicker/CountryPicker";
import styles from "./Visualizer1.module.css";
import { fetchData } from "../../../api/index";

class Visualizer1 extends React.Component {
    state = {
        data: {},
        country: "",
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };
    render() {
        const { data, country } = this.state;
        return (
            <div className={'styles.container'}>
                <br />
                <text>
                    <b>Global and Country Wise Cases of Corona Virus</b>
                </text>
                <br />
                <text>
                    <i>(For a particular select a Country from below)</i>
                </text>
                <br />
                <br />
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default Visualizer1;