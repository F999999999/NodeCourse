"use strict";(self.webpackChunkNodeCourse=self.webpackChunkNodeCourse||[]).push([[103],{6272:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-3d5c44b7",path:"/guide/02-%E8%B7%AF%E7%94%B1.html",title:"2.路由",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"2.1 路由中间件的基本使用",slug:"_2-1-路由中间件的基本使用",children:[]},{level:2,title:"2.2 配置子路由",slug:"_2-2-配置子路由",children:[]}],filePathRelative:"guide/02-路由.md",git:{updatedTime:1633735293e3,contributors:[{name:"YeungWanLum",email:"295386487@qq.com",commits:1}]}}},208:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const e=(0,a(6252).uE)('<h1 id="_2-路由" tabindex="-1"><a class="header-anchor" href="#_2-路由" aria-hidden="true">#</a> 2.路由</h1><p>如果依靠ctx.request.url去手动处理路由，将会写很多处理代码，这时候就需要对应的路由的中间件对路由进行控制，这里介绍一个比较好用的路由中间件koa-router</p><h2 id="_2-1-路由中间件的基本使用" tabindex="-1"><a class="header-anchor" href="#_2-1-路由中间件的基本使用" aria-hidden="true">#</a> 2.1 路由中间件的基本使用</h2><ol><li>新建项目，并在项目根目录下安装 路由中间件</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i koa-router\n</code></pre></div><ol start="2"><li>在app.js文件中，导入<code>koa-router</code>中间件</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="3"><li>使用<code>new</code>来调用第二步返回的<code>Router</code>构造函数生成路由实例</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="4"><li>使用路由实例来接收前端的 <code>get</code>或者<code>post</code>等请求，并处理，给予前端响应</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code> router<span class="token punctuation">.</span><span class="token function">请求方式</span><span class="token punctuation">(</span><span class="token string">&#39;路由标识符号&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n   ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&quot;路由的基本使用&quot;</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="_2-2-配置子路由" tabindex="-1"><a class="header-anchor" href="#_2-2-配置子路由" aria-hidden="true">#</a> 2.2 配置子路由</h2><p>需求: 在一个网站中，配置两个子路由，访问 <code>/home</code>的时候，显示<code>这是home页面</code>,访问<code>/about</code>的时候，显示<code>这是about页面</code></p><ol><li><p>在<code>/routes</code>目录下创建3个文件，分别是<code>index.js</code>、<code>homeRouter.js</code>、<code>aboutRouter.js</code></p></li><li><p>在<code>homeRouter.js</code>中，导入<code>koa-router</code></p></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1.导入kao-router</span>\n<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre></div><ol start="3"><li>在<code>homeRouter.js</code>中，使用<code>new</code>来调用<code>Router</code>构造函数生成路由实例,并且设置路由前缀</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 2.生成路由实例并设置前缀</span>\n<span class="token keyword">const</span> homeRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// 设置前缀</span>\n  prefix<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>使用路由实例来接收前端的 <code>get</code>或者<code>post</code>等请求，并处理，给予前端响应</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 3.接收 请求方法下的请求，并处理返回响应内容</span>\nhomeRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span> \n  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span><span class="token string">&quot;这是home页面&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5"><li>导出模块</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 4.导出模块</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> homeRouter<span class="token punctuation">;</span>\n</code></pre></div><ol start="6"><li>在<code>/router/index.js</code>中, 导入<code>koa-router</code></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 1.导入koa模块</span>\n<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-router&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="7"><li>在<code>/router/index.js</code>中, 使用<code>new</code>来调用<code>Router</code>构造函数生成路由实例</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="8"><li>在<code>/router/index.js</code>中, 导入 写好的<code>homeRouter</code>文件</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> homeRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./homeRouter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="9"><li>把写好的<code>homeRouter</code>挂载到<code>生成的router上</code></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>homeRouter<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> homeRouter<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="10"><li>导入<code>router</code></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>\n</code></pre></div><ol start="11"><li>在app.js中，导入，并挂载到app上</li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li><p>router.allowedMethods()的作用是 如果使用 post 请求访问 user 路由，默认会返回 not find 状态码404，因为没有匹配到。使用了 allowedMethods 会返回 Method Not Allowed 状态码 405。 并且如果访问 option 请求会默认返回1 状态码200</p></li><li><p>prefix这个配置在实例化 Router 的时候可以设置前缀，之后匹配的请求都会自动添加这个前缀。</p></li><li><p>koa-router请求方式： get 、 put 、 post 、 patch 、 delete，而 router.all() 会匹配所有的请求方法。</p></li></ul></div>',34),t={},o=(0,a(3744).Z)(t,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);