// Copyright 2019 by Trinkler Software AG (Switzerland).
// This file is part of the Katal Chain.
//
// Katal Chain is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version <http://www.gnu.org/licenses/>.
//
// Katal Chain is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

use super::*;

// This could also be a pure function.
impl<T: Trait> Module<T> {
    pub fn another_function() -> Result {
        // Create a TemplateState.
        let state = TemplateState {
            field1: 0,
            field2: 1,
            field3: None,
        };

        // Store value.
        <SomeMap<T>>::insert(101, state);

        // Return Ok.
        Ok(())
    }
}
