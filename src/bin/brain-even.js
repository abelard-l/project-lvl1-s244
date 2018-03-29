#!/usr/bin/env node
import { welcome, askName, playEven } from '../index';

const EVEN_GAME = true;

welcome(EVEN_GAME);
const name = askName();
playEven(name);
