using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Splash.Screen.Mask.RNSplashScreenMask
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNSplashScreenMaskModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNSplashScreenMaskModule"/>.
        /// </summary>
        internal RNSplashScreenMaskModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNSplashScreenMask";
            }
        }
    }
}
