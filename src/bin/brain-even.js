#!/usr/bin/env node
import { welcome, askName, showName } from '../index';

const EVEN = true;

welcome(EVEN);
const name = askName();
