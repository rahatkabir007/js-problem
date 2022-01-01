const personArray = [
	{
		name: 'test1',
		age: 21,
		temperature: 97,
	},
	{
		name: 'test2',
		age: 27,
		temperature: 95,
	},
    {
		name: 'test7',
		age: 31,
		temperature: 95,
	},
	{
		name: 'test3',
		age: 45,
		temperature: 98,
	},
	{
		name: 'test4',
		age: 45,
		temperature: 99,
	},
	{
		name: 'test5',
		age: 50,
		temperature: 100,
	},
	{
		name: 'test6',
		age: 49,
		temperature: 105,
	},
];

const vaxTrail = (array) => {
	const A = array.filter(
		(item) => item.age >= 20 && item.age <= 30 && item.temperature < 100
	);
	const B = array.filter(
		(item) => item.age >= 31 && item.age <= 40 && item.temperature < 100
	);
	const C = array.filter(
		(item) => item.age >= 41 && item.age <= 50 && item.temperature < 100
	);
	const D = array.filter((item) => item.temperature >= 100);

	return {
		A: A,
		B: B,
		C: C,
		D: D,
	};
};

const result = vaxTrail(personArray);
console.log(result);
