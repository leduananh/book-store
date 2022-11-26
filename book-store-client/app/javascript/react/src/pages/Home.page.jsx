import * as React from 'react'
import {gql, useQuery} from "@apollo/client";


const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`;


const GET_BOOKS = gql`
    query GetBooks {
        books{
            id,
            title,
            image
        }
    }
`;


function DisplayLocations() {
    const {loading, error, data} = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({id, name, description, photo}) => (
        <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`}/>
            <br/>
            <b>About this location:</b>
            <p>{description}</p>
            <br/>
        </div>
    ));
}


function DisplayBook() {
    const {loading, error, data} = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data["books"].map(({id, title, image}) => (
        <div key={id}>
            <h3>{title}</h3>
            <img width="400" height="250" alt="location-reference" src={`${image}`}/>
        </div>
    ));
}

const HomePage = () => {
    return (
        <>
            <h1>HOME PAGE</h1>
            {/*<DisplayLocations/>*/}
            <DisplayBook/>
        </>
    )
}

export default HomePage