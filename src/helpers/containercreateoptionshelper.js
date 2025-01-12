"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerCreateOptionsHelper = void 0;
var ContainerCreateOptionsHelper = /** @class */ (function () {
    function ContainerCreateOptionsHelper() {
    }
    ContainerCreateOptionsHelper.fromInspectInfo = function (i) {
        var c = {};
        c.name = i.Name;
        c.platform = i.Platform;
        c.Hostname = i.Config.Hostname;
        c.Domainname = i.Config.Domainname;
        c.User = i.Config.User;
        //c.ArgsEscaped=
        c.AttachStdin = i.Config.AttachStdin;
        c.AttachStdout = i.Config.AttachStdout;
        c.AttachStderr = i.Config.AttachStderr;
        c.Tty = i.Config.Tty;
        c.OpenStdin = i.Config.OpenStdin;
        c.StdinOnce = i.Config.StdinOnce;
        c.Env = i.Config.Env;
        c.Cmd = i.Config.Cmd;
        c.Entrypoint = i.Config.Entrypoint;
        c.Image = i.Config.Image;
        c.Labels = i.Config.Labels;
        c.Volumes = i.Config.Volumes;
        c.WorkingDir = i.Config.WorkingDir;
        //c.NetworkDisabled=
        c.MacAddress = i.NetworkSettings.MacAddress;
        c.ExposedPorts = i.Config.ExposedPorts;
        //c.StopSignal=
        //c.StopTimeout=
        //c.Healthcheck=
        c.HostConfig = i.HostConfig;
        c.OnBuild = i.Config.OnBuild;
        //c.Shell=
        c.NetworkingConfig = i.NetworkSettings.Networks;
        return c;
    };
    return ContainerCreateOptionsHelper;
}());
exports.ContainerCreateOptionsHelper = ContainerCreateOptionsHelper;
