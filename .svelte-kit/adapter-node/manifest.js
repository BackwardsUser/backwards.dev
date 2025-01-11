export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.65pthxmk.js","app":"_app/immutable/entry/app.DxcFcKxs.js","imports":["_app/immutable/entry/start.65pthxmk.js","_app/immutable/chunks/entry.BTQJdudp.js","_app/immutable/chunks/runtime.RJqc9H5L.js","_app/immutable/chunks/index.C9CopWQ3.js","_app/immutable/chunks/index-client.tGS7cQs6.js","_app/immutable/entry/app.DxcFcKxs.js","_app/immutable/chunks/runtime.RJqc9H5L.js","_app/immutable/chunks/render.0vxytoRb.js","_app/immutable/chunks/svelte-head.UHu9QReN.js","_app/immutable/chunks/disclose-version.BQGKy5kQ.js","_app/immutable/chunks/props.BYllJ5jM.js","_app/immutable/chunks/index-client.tGS7cQs6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";