const capitalize = (value) => `${value[0].toUpperCase()}${value.slice(1)}`;

const FORMAT = (type, name, result, variables = '', args = '') => `${type} Query${variables ? `(${variables})` : ''} { result: ${name}${args ? `(${args})` : ''} { ${result} } }`;
const QUERY = (name, result, variables = '', args = '') => FORMAT('query', name, result, variables, args);
const MUTATION = (name, result, variables, args) => FORMAT('mutation', name, result, variables, args);
const LIST = (type, variables = '', args = '') => QUERY(`${type}s`, Type.CONNECTION(type), `$pagination: Pagination, ${variables}`, `pagination: $pagination, ${args}`);
const SINGLE = (type, args = '') => QUERY(type, Type.of(type), '$id: ID!', `id: $id,${args}`);
const CREATE = (type, args = '') => MUTATION(`${type}Create`, Type.of(type), `$data: ${capitalize(type)}CreateInput!`, `input: $data, ${args}`);
const UPDATE = (type, args = '') => MUTATION(`${type}Update`, Type.of(type), `$id: ID!, $data: ${capitalize(type)}UpdateInput!`, `id: $id, input: $data, ${args}`);

export class Type {
	static PLAN = `
		id
		name
		value
		comission
		info
	`;

	static ADDRESS = `
		street
		cep
		district
		city
		uf
	`;

	static PERSON = `
		name
		sex
		rg
		rgInfo
		cpf
		nationality
		birthday
		maritalStatus
		profission
		phone
		address {
			${Type.ADDRESS}
		}
	`;

	static USER = `
		id
		role
		email
		person {
			${Type.PERSON}
		}
	`;

	static SALE = `
		id
		createdAt
		confirmed
		isConfirmed
		planId
		plan {
			${Type.PLAN}
		}
		userId
		user {
			id
			person {
				name
			}
		}
		person {
			${Type.PERSON}
		}
		email
		address2 {
			${Type.ADDRESS}
		}
		phone2
		dependents
	`;

	static PAGE_INFO = `
		count
	`;

	static CONNECTION = (type) => `
		nodes {
			${Type.of(type)}
		}
		pageInfo {
			${Type.PAGE_INFO}
		}
	`;

	static AUTH_PAYLOAD = `
		token
		user { ${Type.USER} }
	`;

	static of = (type) => Type[type.toUpperCase()];
}

export class Queries {
	static LOGIN = MUTATION('login', Type.AUTH_PAYLOAD, '$email: String!, $password: String!', 'email: $email, password: $password');
	static ME = QUERY('me', Type.User);

	static LIST_SALE = LIST('sale', '$userId: ID', 'admin: true, userId: $userId');
	static LIST_PLAN = LIST('plan');
	static LIST_USER = LIST('user');

	static SINGLE_SALE = SINGLE('sale', 'admin: true');
	static SINGLE_PLAN = SINGLE('plan');
	static SINGLE_USER = SINGLE('user');

	static CREATE_SALE = CREATE('sale');
	static CREATE_PLAN = CREATE('plan');
	static CREATE_USER = CREATE('user');

	static UPDATE_SALE = UPDATE('sale', 'admin: true');
	static UPDATE_PLAN = UPDATE('plan');
	static UPDATE_USER = UPDATE('user');
}

export const list = (resource) => Queries[`LIST_${resource.toUpperCase()}`];
export const get = (resource) => Queries[`SINGLE_${resource}`];
export const create = (resource) => Queries[`CREATE_${resource.toUpperCase()}`];
export const update = (resource) => Queries[`UPDATE_${resource.toUpperCase()}`];