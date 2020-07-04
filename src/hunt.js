import React from 'react';

const Hunt = (props) => (
    <div key={props.cursor}>
        <p>{`Name: ${(props.hunt.node.name)}`} <br/>
            {`Website: ${props.hunt.node.website}`} <br/>
            {`Votes: ${props.hunt.node.votesCount}`} <br/>
            {`Featured on: ${props.hunt.node.featuredAt}`}</p>
            {process.env.REACT_APP_PH_GRAPHQL_URL}
    </div>
);

export default Hunt;