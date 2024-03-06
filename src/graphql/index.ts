import { readFileSync } from 'fs';
import path from 'path';
import { userResolver } from './resolvers/user.resolver';


const userTypes = readFileSync(path.join(__dirname, "./typedefs/user.graphql"), {
    encoding: 'utf-8',
});

const postTypes = readFileSync(path.join(__dirname, "./typedefs/post.graphql"), {
    encoding: 'utf-8',
});

export const typeDefs = `
${userTypes}
${postTypes}
`;

export const resolvers = {
    Query: {
       ...userResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
    },
};