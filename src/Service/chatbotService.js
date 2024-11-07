// this file basically receives the user input and then convert it into embedding and then print it 

//  Xenova/all-MiniLM-L6-v2
//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


  // this file basically receives the user input and then convert it into embedding and then print it 
//   async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
// 		{
// 			headers: {
// 				 Authorization: "Bearer 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",
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// query({
// 	"inputs": {
// 		"source_sentence": "That is a happy person",
// 		"sentences": [
// 			"That is a happy dog",
// 			"That is a very happy person",
// 			"Today is a sunny day"
// 		]
// 	}
// }).then((response) => {
// 	console.log(JSON.stringify(response));
// });


async function callFlaskAPI(user_query) {
    // console.log(user_query)
    try {
        const response = await fetch('http://127.0.0.1:5000/run-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: user_query }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data.result);
        return data.result  // Ensure that the function returns the "result" from the server response
    } catch (error) {
        console.error('Error:', error);
        return 'Not getting the correct result!';  // Return an error message
    }
}
// console.log(callFlaskAPI("Tell me more about the culture at iiitd?"));

export default callFlaskAPI