import parse from "./parser.mjs"
import stringify from "./stringifier.mjs"

export default class YSON {

	static parse(s, types) {
		return parse(s, types)
	}

	static async load(url, types) {
		let res  = await fetch(url)
		let data = await res.text()
		return YSON.parse(data, types)
	}

	static stringify(o) {
		return stringify(o)
	}

}
