#!/usr/bin/env node
import { welcome, askName } from '../index';
import playEven from '../games/even';

const EVEN_GAME = true;

welcome(EVEN_GAME);
const name = askName();
playEven(name);
