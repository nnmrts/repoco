// @flow
import fs from "fs";
import readline from "readline";

/**
 *
 *
 * @param {string} path
 * file path
 * @returns {Promise<string>}
 * the text
 */
export default async(path: string): Promise<string> => new Promise(
	(resolve: (string) => void) => {
		const fileStream = fs.createReadStream(path);

		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});

		const lines = [];

		rl.on("line", (line: string) => {
			if (line[0] === "/" && line[1] === "/") {
				if (line[3] !== "@") {
					lines.push(line.slice(3));
				}
			}
			else {
				rl.close();
				rl.removeAllListeners();
			}
		});

		rl.on("close", async() => {
			resolve(lines.slice(1).join(" "));
		});
	}
);
