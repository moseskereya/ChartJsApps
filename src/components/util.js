import React from 'react';
import numeral from 'numeral';

export const reformat = (number) => number ? `+${numeral(number).format("0,0a")}` : "+0";
