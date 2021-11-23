import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl styles={{
            width: '30%',
            marginBottom: '10%',
            padding: '10px',
            margin: 'auto',
        }}>
            <NativeSelect
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
                style={{
                    backgroundBorder: '1px solid #000000',
                    borderRadius: '35px',
                    padding: '2px 20px 6px 20px',
                    outline: 'none',
                    backgroundColor: '#fff',
                    margin: '50px'
                }}
            >
                <option value="">Global</option>
                {fetchedCountries.map((country, key) => (
                    <option key={key} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl >
    );
};

export default CountryPicker;