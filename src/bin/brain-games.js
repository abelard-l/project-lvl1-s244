#!/usr/bin/env node
import { welcome, askName, showName } from '../index';

welcome();
const name = askName();
showName(name);
