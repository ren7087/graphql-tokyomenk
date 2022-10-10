import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type User {
		id: Int
		name: String
		email: String
		password: String
	}

	type Query {
		users: [User]!
	}
`;
