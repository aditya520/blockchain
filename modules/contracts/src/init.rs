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

// This function basically performs auto-run for this module.
impl<T: Trait> Module<T> {
    pub fn init() -> Result {
        // Get current time.
        let t = Time::from_unix(<timestamp::Module<T>>::get().as_());

        // Calculating the initial contract state.
        Self::scheduler_run(t)?;

        // Return Ok if successful.
        Ok(())
    }
}
