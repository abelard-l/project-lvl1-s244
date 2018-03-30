#!/usr/bin/env node
import { welcome, askName, showName } from '../index';
import playCalc from '../games/calc';

const CALC_GAME = true;

welcome(false, CALC_GAME);
const name = askName();
showName(name);
playCalc(name);
