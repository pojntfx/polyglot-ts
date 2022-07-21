/*
	Copyright 2022 Loophole Labs

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		   http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

export const numToU8BigEndian = (num: number) => {
  const dataView = new DataView(Uint8Array.from([0]).buffer);

  dataView.setUint8(0, num);

  return new Uint8Array(dataView.buffer);
};

export const numToU16BigEndian = (num: number) => {
  const dataView = new DataView(Uint16Array.from([0]).buffer);

  dataView.setUint16(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToU32BigEndian = (num: number) => {
  const dataView = new DataView(Uint32Array.from([0]).buffer);

  dataView.setUint32(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToU64BigEndian = (num: bigint) => {
  const dataView = new DataView(BigUint64Array.from([0n]).buffer);

  dataView.setBigUint64(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToI32BigEndian = (num: number) => {
  const dataView = new DataView(Int32Array.from([0]).buffer);

  dataView.setInt32(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToI64BigEndian = (num: bigint) => {
  const dataView = new DataView(BigInt64Array.from([0n]).buffer);

  dataView.setBigInt64(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToF32BigEndian = (num: number) => {
  const dataView = new DataView(Float32Array.from([0]).buffer);

  dataView.setFloat32(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const numToF64BigEndian = (num: number) => {
  const dataView = new DataView(Float64Array.from([0]).buffer);

  dataView.setFloat64(0, num, false);

  return new Uint8Array(dataView.buffer);
};

export const u8BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getUint8(0);
};

export const u16BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getUint16(0, false);
};

export const u32BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getUint32(0, false);
};

export const u64BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getBigUint64(0, false);
};

export const i32BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getInt32(0, false);
};

export const i64BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getBigInt64(0, false);
};

export const f32BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getFloat32(0, false);
};

export const f64BigEndianToNum = (buf: Uint8Array) => {
  const dataView = new DataView(buf.buffer);

  return dataView.getFloat64(0, false);
};
