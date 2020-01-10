// /**
//  * Copyright (c) 2019 mol* contributors, licensed under MIT, See LICENSE file for more info.
//  *
//  * @author Alexander Rose <alexander.rose@weirdbyte.de>
//  * @author Jesse Liang <jesse.liang@rcsb.org>
//  */



export class OBJElement {
  name: string
  verticies: [[number]]
  normals: [[number]]
  faces: [[number]]
  lines: [number]
  constructor() {

  }
  addVertex() {

  }
}

export class OBJData {
  elements: [OBJElement]
  constructor() {
    
  }
}

// Write this to add vertices, write to file, ...