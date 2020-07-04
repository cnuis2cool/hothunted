import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Hunt from './hunt';

const Hunts = () => (
  <Query
    query={gql`
    query { posts(order: RANKING, first: 5) {
        edges{
          cursor
          node{
            id
            name
            tagline
            description
            url
            votesCount
            featuredAt
            thumbnail{
              type
              url
            }
            website
            reviewsRating
    }}}}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        //   return data.edges.map(({ node, cursor }) => (
        //     <div key={cursor}>
        //       <p>{`name: ${node.name}, website: ${node.website}`}</p>
        //     </div>
        //   ));
        return data.posts.edges.map((currentHunt) => (
            <Hunt hunt={currentHunt} />
        ));
    }}
  </Query>
);

export default Hunts;