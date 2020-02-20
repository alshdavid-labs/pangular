import { ParseResult } from './parser'

export const preProcess = (ast: ParseResult[]): ParseResult => {
  const past:ParseResult[] = []
  const clone = cloneResults(ast)
  // crawl(ast, past)
  clone[0].children[0].type = 'broken'
  const target = produceTarget(ast)
  return target
}

function produceTarget(ast: ParseResult[]): ParseResult {
  let target: ParseResult
  if (ast.length === 1) {
    target = ast[0]
    target.attrs['#host'] = undefined
  } else {
    target = {
      type: 'tag',
      name: 'Fragment',
      voidElement: false,
      attrs: {},
      children: ast
    }
  }
  return target
}

function cloneResults(ast: ParseResult[]): ParseResult[] {
  const results: ParseResult[] = []
  for (const i in ast) {
    const c = ast[i] 
    const result: ParseResult = {
      type: c.type,
      name: c.name,
      content: c.content,
      voidElement: c.voidElement,
      attrs: { ...(c.attrs || {}) },
      children: [ ...(c.children || []) ]
    }
    if (c.children && c.children.length !== 0) {
      result.children = cloneResults(ast[i].children)
    }
    results.push(result)
  }
  return results
}

function crawl(ast: ParseResult[], writer: ParseResult[]) {
  for (const i in ast) {
    const c = ast[i] 
    const result: ParseResult = {
      type: c.type,
      name: c.name,
      content: c.content,
      voidElement: c.voidElement,
      attrs: { ...(c.attrs || {}) },
      children: [ ...(c.children || []) ]
    }
    writer.push(result)
    if (ast[i].children && ast[i].children.length !== 0) {
      crawl(ast[i].children, writer[i].children)
    }
  }
}