"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.varRegex = exports.spaceRegex = exports.regexRegex = exports.questionMark = exports.parenthesisRegex = exports.openParenthesis = exports.openBracket = exports.objectDeclarationRegex = exports.nextConditionRegex = exports.letRegex = exports.importPathRegex = exports.hasFailScriptRegex = exports.functionRegex = exports.functionCommentStart = exports.emptyRegex = exports.constRegex = exports.conditionStartRegex = exports.commentStart = exports.commentLineIndicator = exports.commentEnd = exports.closeParenthesis = exports.closeBracket = exports.classRegex = exports.chunkNumberRegex = exports.betweenParantheses = exports.betweenBrackets = exports.accollades = exports.EOL = void 0;
const emptyRegex = exports.emptyRegex = /^\s+$/gm;
const varRegex = exports.varRegex = /(.*)?var /gm;
const letRegex = exports.letRegex = /(.*)?let /gm;
const constRegex = exports.constRegex = /(.*)?const /gm;
const betweenParantheses = exports.betweenParantheses = /(?<=\().*(?=\))/;
const betweenBrackets = exports.betweenBrackets = /(?<=\{).*(?=\})/;
const functionRegex = exports.functionRegex = /(.*)?function /gm; // /(.*)?function |=>/gm
const regexRegex = exports.regexRegex = /\/.*\/(gm)?;/;
const spaceRegex = exports.spaceRegex = /( )/gm;
const openParenthesis = exports.openParenthesis = /\(/gm;
const closeParenthesis = exports.closeParenthesis = /\)/gm;
const parenthesisRegex = exports.parenthesisRegex = /\(|\)/gm;
const openBracket = exports.openBracket = /\{/gm;
const closeBracket = exports.closeBracket = /\}/gm;
const EOL = exports.EOL = /;/gm;
const commentLineIndicator = exports.commentLineIndicator = /^(\/\*)(?=.*)(\*\/)|(\/\/)(?=.*)/gm;
const functionCommentStart = exports.functionCommentStart = /^\/\*\*/gm;
const commentStart = exports.commentStart = /^\/\*/gm;
const commentEnd = exports.commentEnd = /\*\//gm;
const accollades = exports.accollades = /{|}/gm;
const importPathRegex = exports.importPathRegex = /require\("(.*)"\)/;
const classRegex = exports.classRegex = /(?=.*)?(?:class )(.*){/;
const questionMark = exports.questionMark = /\?/;
const conditionStartRegex = exports.conditionStartRegex = /(?<!else )if/;
const nextConditionRegex = exports.nextConditionRegex = /(?<=else.*)if/;
const hasFailScriptRegex = exports.hasFailScriptRegex = /else(?=[^)]\{)/;
const chunkNumberRegex = exports.chunkNumberRegex = /"\.([^)]*)\.chunk/gm;
const objectDeclarationRegex = exports.objectDeclarationRegex = /new /;