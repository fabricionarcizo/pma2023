/*
 * MIT License
 *
 * Copyright (c) 2023 Fabricio Batista Narcizo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import UIKit

/// The `ViewController` class defines the shared behavior that’s common to the primary view
/// controller used in this application.
class ViewController: UIViewController {

    /// The ``UITextField`` used to get the user's name.
    @IBOutlet var textInput: UITextField!

    /// The ``UILabel`` used to show a welcome message to the user.
    @IBOutlet var textLabel: UILabel!

    /// Called after the controller's view is loaded into memory.
    ///
    /// This method is called after the view controller has loaded its view hierarchy into memory.
    /// This method is called regardless of whether the view hierarchy was loaded from a nib file or
    /// created programmatically in the loadView() method. You usually override this method to
    /// perform additional initialization on views that were loaded from nib files.
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    /// Method to be executed when the user presses the `Send` button.
    ///
    /// This method is called after the user presses the `Send` button. It takes the current text
    /// available in the ``textInput`` component and check if it is empty or not. Then, submits the
    /// typed name to the ``textLabel`` component and shows the welcome string to the user.
    @IBAction func sendButtonTapped() {

        // Get the name in the text field component. In case of an empty `String`, replaces it by
        // the word `World`.
        let name = textInput.text!.isEmpty ? "World" : textInput.text!

        // Add the final `String` into the label component.
        textLabel.text = "Hello, \(name.trimmingCharacters(in: .whitespacesAndNewlines))!"
    }

}
