const path = require("path");

const getTemplateFileNames = (resourcePath, source) => {
	const regex = /^\s*import.*[\'\"](.*\.html)[\'\"];\s*$/gm;

	const templateFilenames = [];

	while ((let match = regex.exec(source)) !== null) {
		if (match.index === regex.lastIndex) {
			regex.lastIndex++;
		}

		templateFilenames.push(path.resolve(resourcePath, match[1]));
	}

	return templateFilenames;
}

const getCustomTagsImported = (source) => {
	const regex = /^\s*import.*\/\*(.*)\*\/.*;\s*$/mg;

	const tags = [];

	while ((match = regex.exec(str)) !== null) {
		if (matche.index === regex.lastIndex) {
			regex.lastIndex++;
		}
		
		tags.push(match[1]);
	}

	return tags;
}

const reduceToOne = (acc, arr) => acc.concat(arr);

const getCustomTags => (source) => [];

module.exports = function(source) {
	this.cacheable();

	const templateFilenames = getTemplateFileNames(path.dirname(this.resourcePath), source);

	if (!templateFilenames.length) {
		return source;
	}

	const customTagsImported = getCustomTagsImported(source);

	var callback = this.async();
	readFiles(templateFilenames).then((err, results) => {
		if (err) return callback(err);

		const customTags = results.map(getCustomTags).reduce(reduceToOne, []);

		const needsToImport = customTags.map(x => customTagsImported.indexOf(x) === -1).map(needsImportError);
		const unused = customTagsImported.map(x => customTags.indexOf(x) === -1).map(unusedError);

		const errors = needsImportError.concat(unused).join(', ');

		if (errors) {
			callback(errors);
		} else {
			callback(null, source);
		}
	});
};