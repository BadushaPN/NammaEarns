import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Phone, User, MapPin, ArrowRight } from 'lucide-react';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        area: 'Anna Nagar'
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.phone.length >= 10 && formData.name) {
            // In a real app, we would call a register function
            login(formData.p
> namma-earns@0.1.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 597 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
11:44:37 AM [vite] hmr update /src/components/Landing.tsx
11:44:43 AM [vite] ✨ new dependencies optimized: react-router-dom
11:44:43 AM [vite] ✨ optimized dependencies changed. reloading
11:44:43 AM [vite] hmr invalidate /src/components/Landing.tsx Could not Fast Refresh (new export)
11:44:43 AM [vite] hmr update /src/App.tsx
11:44:51 AM [vite] hmr update /src/App.tsx (x2)
11:44:51 AM [vite] Internal server error: Transform failed with 1 error:
D:/Personal/std-project/src/App.tsx:98:7: ERROR: Multiple exports with the same name "default"
  Plugin: vite:esbuild
  File: D:/Personal/std-project/src/App.tsx:79:0

  Multiple exports with the same name "default"
  96 |  export default App;
  97 |
  98 |  export default App;var _c, _c2;$RefreshReg$(_c, "Home");$RefreshReg$(_c2, "App");
     |         ^
  99 |
  100|  if (import.meta.hot && !inWebWorker) {

      at failureErrorWithLog (D:\Personal\std-project\node_modules\esbuild\lib\main.js:1472:15)
      at D:\Personal\std-project\node_modules\esbuild\lib\main.js:755:50
      at responseCallbacks.<computed> (D:\Personal\std-project\node_modules\esbuild\lib\main.js:622:9)
      at handleIncomingPacket (D:\Personal\std-project\node_modules\esbuild\lib\main.js:677:12)
      at Socket.readFromStdout (D:\Personal\std-project\node_modules\esbuild\lib\main.js:600:7)
      at Socket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
11:45:21 AM [vite] hmr update /src/App.tsx
11:45:23 AM [vite] hmr update /src/components/Landing.tsx
11:45:30 AM [vite] hmr update /src/components/Landing.tsx (x2)
q
PS D:\Personal\std-project> npm run dev
>> 

> namma-earns@0.1.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 423 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
q
PS D:\Personal\std-project> npm run dev
>> 

> namma-earns@0.1.0 dev
> vite

Re-optimizing dependencies because lockfile has changed
Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 5538 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
11:58:24 AM [vite] Internal server error: [postcss] D:/Personal/std-project/src/index.css:23:9: The `max-width[1280px]` class does not exist. If `max-width[1280px]` is a custom class, make sure it is defined within a `@layer` directive.
  Plugin: vite:css
  File: D:/Personal/std-project/src/index.css:23:8
  21 |  @layer components {
  22 |      .container {
  23 |          @apply max-width[1280px] mx-auto px-4 sm:px-6 lg:px-8;
     |          ^
  24 |      }
  25 |  
      at Input.error (D:\Personal\std-project\node_modules\postcss\lib\input.js:135:16)
      at AtRule.error (D:\Personal\std-project\node_modules\postcss\lib\node.js:146:32)
      at processApply (D:\Personal\std-project\node_modules\tailwindcss\lib\lib\expandApplyAtRules.js:380:29)
      at D:\Personal\std-project\node_modules\tailwindcss\lib\lib\expandApplyAtRules.js:551:9
      at D:\Personal\std-project\node_modules\tailwindcss\lib\processTailwindFeatures.js:55:50
      at async plugins (D:\Personal\std-project\node_modules\tailwindcss\lib\plugin.js:38:17)
      at async LazyResult.runAsync (D:\Personal\std-project\node_modules\postcss\lib\lazy-result.js:293:11)
      at async compileCSS (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:36898:21)
      at async TransformPluginContext.transform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:36171:11)
      at async PluginContainer.transform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49099:18)
      at async loadAndTransform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:51978:27)
11:58:24 AM [vite] Pre-transform error: [postcss] D:/Personal/std-project/src/index.css:23:9: The `max-width[1280px]` class does not exist. If `max-width[1280px]` is a custom class, make sure it is defined within a `@layer` directive.
> namma-earns@0.1.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 597 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
11:44:37 AM [vite] hmr update /src/components/Landing.tsx
11:44:43 AM [vite] ✨ new dependencies optimized: react-router-dom
11:44:43 AM [vite] ✨ optimized dependencies changed. reloading
11:44:43 AM [vite] hmr invalidate /src/components/Landing.tsx Could not Fast Refresh (new export)
11:44:43 AM [vite] hmr update /src/App.tsx
11:44:51 AM [vite] hmr update /src/App.tsx (x2)
11:44:51 AM [vite] Internal server error: Transform failed with 1 error:
D:/Personal/std-project/src/App.tsx:98:7: ERROR: Multiple exports with the same name "default"
  Plugin: vite:esbuild
  File: D:/Personal/std-project/src/App.tsx:79:0

  Multiple exports with the same name "default"
  96 |  export default App;
  97 |
  98 |  export default App;var _c, _c2;$RefreshReg$(_c, "Home");$RefreshReg$(_c2, "App");
     |         ^
  99 |
  100|  if (import.meta.hot && !inWebWorker) {

      at failureErrorWithLog (D:\Personal\std-project\node_modules\esbuild\lib\main.js:1472:15)
      at D:\Personal\std-project\node_modules\esbuild\lib\main.js:755:50
      at responseCallbacks.<computed> (D:\Personal\std-project\node_modules\esbuild\lib\main.js:622:9)
      at handleIncomingPacket (D:\Personal\std-project\node_modules\esbuild\lib\main.js:677:12)
      at Socket.readFromStdout (D:\Personal\std-project\node_modules\esbuild\lib\main.js:600:7)
      at Socket.emit (node:events:518:28)
      at addChunk (node:internal/streams/readable:561:12)
      at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
      at Readable.push (node:internal/streams/readable:392:5)
      at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
11:45:21 AM [vite] hmr update /src/App.tsx
11:45:23 AM [vite] hmr update /src/components/Landing.tsx
11:45:30 AM [vite] hmr update /src/components/Landing.tsx (x2)
q
PS D:\Personal\std-project> npm run dev
>> 

> namma-earns@0.1.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 423 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
q
PS D:\Personal\std-project> npm run dev
>> 

> namma-earns@0.1.0 dev
> vite

Re-optimizing dependencies because lockfile has changed
Port 5173 is in use, trying another one...

  VITE v5.4.21  ready in 5538 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
11:58:24 AM [vite] Internal server error: [postcss] D:/Personal/std-project/src/index.css:23:9: The `max-width[1280px]` class does not exist. If `max-width[1280px]` is a custom class, make sure it is defined within a `@layer` directive.
  Plugin: vite:css
  File: D:/Personal/std-project/src/index.css:23:8
  21 |  @layer components {
  22 |      .container {
  23 |          @apply max-width[1280px] mx-auto px-4 sm:px-6 lg:px-8;
     |          ^
  24 |      }
  25 |  
      at Input.error (D:\Personal\std-project\node_modules\postcss\lib\input.js:135:16)
      at AtRule.error (D:\Personal\std-project\node_modules\postcss\lib\node.js:146:32)
      at processApply (D:\Personal\std-project\node_modules\tailwindcss\lib\lib\expandApplyAtRules.js:380:29)
      at D:\Personal\std-project\node_modules\tailwindcss\lib\lib\expandApplyAtRules.js:551:9
      at D:\Personal\std-project\node_modules\tailwindcss\lib\processTailwindFeatures.js:55:50
      at async plugins (D:\Personal\std-project\node_modules\tailwindcss\lib\plugin.js:38:17)
      at async LazyResult.runAsync (D:\Personal\std-project\node_modules\postcss\lib\lazy-result.js:293:11)
      at async compileCSS (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:36898:21)
      at async TransformPluginContext.transform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:36171:11)
      at async PluginContainer.transform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:49099:18)
      at async loadAndTransform (file:///D:/Personal/std-project/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:51978:27)
11:58:24 AM [vite] Pre-transform error: [postcss] D:/Personal/std-project/src/index.css:23:9: The `max-width[1280px]` class does not exist. If `max-width[1280px]` is a custom class, make sure it is defined within a `@layer` directive.hone, 'customer');
            navigate('/dashboard');
        } else {
            alert('Please fill in all details correctly');
        }
    };

    const areas = ["Anna Nagar", "Adyar", "Mylapore", "T. Nagar", "Velachery", "Tambaram", "OMR", "Porur"];

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center">
                    <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <UserPlus className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
                    <p className="mt-2 text-sm text-slate-600 font-medium">Join NammaEarns today and get your tasks done by students</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-4 py-4 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600">
                                <MapPin className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500" />
                            </div>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                className="appearance-none rounded-2xl relative block w-full pl-12 pr-10 py-4 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-all bg-slate-50/50 hover:bg-white cursor-pointer"
                            >
                                {areas.map(area => (
                                    <option key={area} value={area}>{area}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <ArrowRight className="h-4 w-4 text-slate-400 rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all active:scale-[0.98] shadow-xl shadow-blue-200/50"
                        >
                            Sign Up as Customer
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-slate-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
